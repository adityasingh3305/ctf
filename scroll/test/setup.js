// Provide browser globals that vitest's node environment needs
import { vi } from 'vitest';

// Mock CSS imports
vi.mock('../style.css', () => ({}));

// Mock localStorage
globalThis.localStorage = {
  _store: {},
  getItem(key) { return this._store[key] ?? null; },
  setItem(key, value) { this._store[key] = value; },
  removeItem(key) { delete this._store[key]; },
  clear() { this._store = {}; },
};

// Mock IntersectionObserver
globalThis.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Mock caches API
globalThis.caches = {
  default: {
    match: () => Promise.resolve(null),
    put: () => Promise.resolve(),
  }
};

// Mock btoa
globalThis.btoa = (s) => Buffer.from(s).toString('base64');

// Mock self
globalThis.self = globalThis;

// Mock navigator
globalThis.navigator = {};

// Mock Request/Response
globalThis.Request = class Request {
  constructor(url) { this.url = url; }
};
globalThis.Response = class Response {
  constructor(body, init) { this.body = body; this.status = init?.status; }
  clone() { return this; }
  text() { return Promise.resolve(this.body); }
};

// Mock fetch
globalThis.fetch = () => Promise.resolve({
  ok: true,
  status: 200,
  json: () => Promise.resolve({
    data: { children: [], after: null }
  }),
});