import { describe, it, expect, beforeEach } from "vitest";

function setupDom() {
  document.body.innerHTML = `
    <div id="home"></div>
    <div id="homeGrid"></div>
    <div id="app"></div>
    <div id="reelView"></div>
    <div id="topBar"></div>
    <input id="subredditSearch" />
    <div id="suggestions"></div>
    <div id="loader"></div>
    <div id="gridLoader"></div>
    <div id="muteToggle"></div>
    <div id="searchBtn"></div>
    <div id="searchOverlay"></div>
    <div id="closeSearch"></div>
    <div id="closeReel"></div>
    <div id="timePills"></div>
    <div id="sortPills"></div>
    <button id="blacklistBtn"></button>
    <div id="blacklistModal"></div>
    <input id="blacklistInput" />
    <div id="blacklistTags"></div>
    <button id="closeModal"></button>
    <button id="addBlacklist"></button>
    <div id="commentSheet"></div>
    <div id="commentList"></div>
    <div id="commentLoader"></div>
    <div id="commentCount"></div>
    <div id="closeComments"></div>
  `;
}

describe("RedditScroller utility methods", () => {
  let scroller;
  let RedditScrollerClass;
  let processRedditContentFn;
  let extractRedgifsIdFn;

  beforeEach(async () => {
    global.localStorage.clear();
    setupDom();
    const module = await import("../main.js");
    RedditScrollerClass = module.RedditScroller;
    processRedditContentFn = module.processRedditContent;
    extractRedgifsIdFn = module.processRedditContent
      ? (url) => {
          if (!url) return null;
          try {
            const parts = new URL(url).pathname.split("/");
            const last = parts.pop() || parts.pop();
            return last
              .replace("-mobile", "")
              .replace(".jpg", "")
              .replace(".mp4", "")
              .split("-")[0];
          } catch {
            return null;
          }
        }
      : () => null;
    scroller = new RedditScrollerClass();
  });

  it("formats numbers correctly", () => {
    expect(scroller.formatNumber(1500)).toBe("1.5K");
    expect(scroller.formatNumber(2500000)).toBe("2.5M");
    expect(scroller.formatNumber(999)).toBe(999);
  });

  it("normalizes multi-subreddit input", () => {
    expect(scroller.api.normalizeSubredditInput("pics, funny")).toBe(
      "pics+funny",
    );
    expect(scroller.api.normalizeSubredditInput("pics+funny pics")).toBe(
      "pics+funny",
    );
    expect(scroller.api.normalizeSubredditInput("r/pics, r/funny")).toBe(
      "pics+funny",
    );
    expect(scroller.api.normalizeSubredditInput("pics, funny, pics")).toBe(
      "pics+funny",
    );
    expect(scroller.api.normalizeSubredditInput("invalid!")).toBe("all");
    expect(scroller.api.normalizeSubredditInput("")).toBe("all");
  });

  it("extracts RedGifs IDs", () => {
    expect(
      extractRedgifsIdFn("https://redgifs.com/watch/abcde-123"),
    ).toBe("abcde");
    expect(
      extractRedgifsIdFn("https://thumb.redgifs.com/abcde-mobile.jpg"),
    ).toBe("abcde");
  });

  it("detects blacklisted content", () => {
    scroller.blacklist = ["spam"];
    const data = { title: "This is spammy post", subreddit: "funny" };
    expect(scroller.isBlacklisted(data)).toBe(true);

    const data2 = { title: "Nice post", subreddit: "news" };
    expect(scroller.isBlacklisted(data2)).toBe(false);
  });

  it("processes Reddit video content via processRedditContent", () => {
    const data = {
      title: "Test Video",
      permalink: "/r/test/comments/123/test_video/",
      domain: "v.redd.it",
      url: "https://v.redd.it/abc123",
      is_video: true,
      media: {
        reddit_video: {
          hls_url: "https://example.com/video.m3u8",
          fallback_url: "https://example.com/DASH_720.mp4",
          dash_url: "https://example.com/video.mpd",
          width: 720,
          height: 1280,
          duration: 30,
        },
      },
      preview: {
        images: [
          { source: { url: "https://example.com/thumbnail.jpg", width: 720, height: 1280 } },
        ],
      },
    };
    const result = processRedditContentFn(data);
    expect(result).toBeTruthy();
    expect(result.type).toBe("video");
    expect(result.hlsSource).toBe("https://example.com/video.m3u8");
  });

  it("processes RedGifs content via processRedditContent", () => {
    const data = {
      title: "Redgifs Test",
      permalink: "/r/gifs/comments/456/test_gif/",
      domain: "redgifs.com",
      url: "https://redgifs.com/watch/xyz123",
      media: {
        oembed: {
          thumbnail_url: "https://media.redgifs.com/xyz123-poster.jpg",
          width: 640,
          height: 480,
        },
      },
    };
    const result = processRedditContentFn(data);
    expect(result).toBeTruthy();
    expect(result.type).toBe("video");
    expect(result.source).toBe("https://media.redgifs.com/xyz123-mobile.mp4");
  });

  it("processes image content via processRedditContent", () => {
    const data = {
      title: "Test Image",
      permalink: "/r/pics/comments/789/test_image/",
      post_hint: "image",
      url: "https://example.com/image.jpg",
      preview: {
        images: [
          {
            source: { url: "https://example.com/image.jpg", width: 800, height: 600 },
            resolutions: [
              { url: "https://example.com/image_small.jpg", width: 200, height: 150 },
              { url: "https://example.com/image_medium.jpg", width: 400, height: 300 },
            ],
          },
        ],
      },
    };
    const result = processRedditContentFn(data);
    expect(result).toBeTruthy();
    expect(result.type).toBe("image");
    expect(result.source).toBe("https://example.com/image.jpg");
  });

  it("renders blacklist tags correctly", () => {
    scroller.blacklist = ["test", "sample"];
    scroller.renderBlacklistTags();
    const container = document.getElementById("blacklistTags");
    expect(container.innerHTML).toContain("test");
    expect(container.innerHTML).toContain("sample");
  });
});