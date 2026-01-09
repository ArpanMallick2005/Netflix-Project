import React from 'react'

const VideoTitle3 = () => {
  return (
    <div className="w-full bg-black bg-linear-to-r from-black via-zinc-900 to-black px-6 md:px-16 py-20">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
    <h2 className="text-white text-2xl md:text-3xl font-semibold">
      Browse by Languages
    </h2>
    <div className="flex flex-wrap items-center gap-4 text-sm text-white">
      <span className="text-gray-300">Select Your Preferences</span>
      <select
        className="
          bg-black
          border
          border-gray-500
          px-4
          py-2
          rounded
          focus:outline-none
          focus:border-white
        "
      >
        <option>Original Language</option>
        <option>Dubbing</option>
        <option>Subtitles</option>
      </select>
      <select
        className="
          bg-black
          border
          border-gray-500
          px-4
          py-2
          rounded
          focus:outline-none
          focus:border-white
        "
      >
  <option>Indonesian</option>
  <option>Malay</option>
  <option>Turkish</option>
  <option selected>English</option>
  <option>Japanese</option>
  <option>Spanish</option>
  <option>French</option>
  <option>Hindi</option>
  <option>Korean</option>
  <option>German</option>
  <option>Mandarin</option>
  <option>Italian</option>
  <option>Portuguese</option>
  <option>Cantonese</option>
  <option>Dutch</option>
  <option>Filipino</option>
  <option>Polish</option>
  <option>Swedish</option>
  <option>Arabic</option>
  <option>Tamil</option>
  <option>Danish</option>
  <option>Thai</option>
      </select>
      <div className="flex items-center gap-2">
        <span className="text-gray-300">Sort by</span>
        <select
          className="
            bg-black
            border
            border-gray-500
            px-4
            py-2
            rounded
            focus:outline-none
            focus:border-white
          "
        >
          <option>Suggestions For You</option>
          <option>Most Popular</option>
          <option>Recently Added</option>
          <option>A–Z</option>
          <option>Z-A</option>
        </select>
      </div>
    </div>
  </div>
</div>
  )
}

export default VideoTitle3;