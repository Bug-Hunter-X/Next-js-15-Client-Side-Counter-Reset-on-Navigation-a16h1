# Next.js 15 Client-Side Counter Reset Bug

This repository demonstrates a bug in a Next.js 15 application where a client-side counter resets to zero when navigating away from and back to the page containing the counter.  The issue is related to how the `useEffect` hook handles cleanup and re-rendering on route changes.

## Bug Description

A counter on the `/about` page increments every second.  Navigating away from and then back to the `/about` page causes the counter to restart from 0, losing its previous value.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.
5. Observe the counter incrementing.
6. Navigate to `/` (home page).
7. Navigate back to `/about`.
8. Notice that the counter has reset to 0.

## Solution

The solution involves using the `useRef` hook to persist the counter's value across navigation events. This prevents the counter from being reinitialized every time the component mounts.