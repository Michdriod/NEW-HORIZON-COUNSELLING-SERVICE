/**
 * Photography manifest.
 *
 * Every image is a locally hosted Pexels photo (Pexels License: free for
 * commercial use, no attribution required — provenance is recorded in
 * `public/images/CREDITS.md` so the client can trace or replace any of them).
 *
 * Alt text describes what the photo shows for someone who cannot see it.
 * Where an image is purely atmospheric and the surrounding copy already
 * carries the meaning, pass `alt=""` at the call site instead.
 */
export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const photo = (src: string, alt: string): Photo => ({
  src: `/images/${src}.jpg`,
  alt,
  width: 1600,
  height: 1100,
});

export const photos = {
  marriage: photo(
    "marriage-counselling",
    "A couple sitting together on a sofa, turned towards each other in conversation"
  ),
  family: photo(
    "family-counselling",
    "Two parents and three children sitting close together on a sofa at home, laughing"
  ),
  premarital: photo(
    "premarital-counselling",
    "A couple talking over coffee at a kitchen table"
  ),
  faith: photo(
    "faith-based-counselling",
    "A man sitting alone in a church pew with his hands clasped and head bowed"
  ),
  online: photo(
    "online-counselling",
    "A woman wearing headphones, relaxed on a sofa at home during a video session on her laptop"
  ),
  session: photo(
    "counselling-session",
    "Two people in a bright, plant-filled room during a counselling session"
  ),
  couples: photo(
    "couples",
    "A couple sitting close on a sofa, listening to one another"
  ),
  families: photo(
    "families",
    "A family of five leaning into one another in a warm embrace"
  ),
  individuals: photo(
    "individuals",
    "A young woman sitting quietly with her hands together, eyes closed, in a calm room"
  ),
  articleReconnecting: photo(
    "article-reconnecting",
    "A couple standing close together against a bright open sky"
  ),
  articleFaith: photo(
    "article-faith",
    "Hands clasped in prayer resting on an open Bible"
  ),
} satisfies Record<string, Photo>;
