export const CACHE_EVENT = 'CACHE_EVENT';
export function cacheEvent(id, event) {
  return {
    type: CACHE_EVENT,
    eventId: id,
    event: event
  }
}
