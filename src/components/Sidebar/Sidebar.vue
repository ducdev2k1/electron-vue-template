<template>
  <aside class="w-56 bg-[#222337] flex flex-col justify-between">
    <nav class="pt-4">
      <ul class="space-y-1">
        <li>
          <a
            class="flex items-center gap-3 px-4 py-2 bg-[#2e2e44] rounded-md text-white"
            href="#"
          >
            <i class="fas fa-home text-white text-lg"> </i>
            <span class="text-sm font-medium"> Activity </span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center gap-3 px-4 py-2 text-[#a0a0b8] hover:text-white"
            href="#"
          >
            <i class="fas fa-desktop text-[#a0a0b8] text-lg"> </i>
            <span class="text-sm"> My computer </span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center gap-3 px-4 py-2 text-[#a0a0b8] hover:text-white"
            href="#"
          >
            <i class="fas fa-user-friends text-[#a0a0b8] text-lg"> </i>
            <span class="text-sm"> Shared with me </span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center gap-3 px-4 py-2 text-[#a0a0b8] hover:text-white"
            href="#"
          >
            <i class="fas fa-cog text-[#a0a0b8] text-lg"> </i>
            <span class="text-sm"> Settings </span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center gap-3 px-4 py-2 text-[#a0a0b8] hover:text-white"
            href="#"
          >
            <i class="fas fa-user text-[#a0a0b8] text-lg"> </i>
            <span class="text-sm"> Account </span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center gap-3 px-4 py-2 text-[#a0a0b8] hover:text-white"
            href="#"
          >
            <i class="fas fa-info-circle text-[#a0a0b8] text-lg"> </i>
            <span class="text-sm"> About </span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center gap-3 px-4 py-2 text-[#a0a0b8] hover:text-white"
            href="#"
          >
            <i class="fas fa-question-circle text-[#a0a0b8] text-lg"> </i>
            <span class="text-sm"> Help </span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center gap-3 px-4 py-2 text-[#a0a0b8] hover:text-white"
            href="#"
          >
            <i class="fas fa-pause-circle text-[#a0a0b8] text-lg"> </i>
            <span class="text-sm"> Synchronization paused </span>
          </a>
        </li>
      </ul>
    </nav>
    <div class="px-4 pb-6">
      <div class="flex items-center gap-2 text-[#a0a0b8] mb-1">
        <i class="fas fa-cloud text-sm"> </i>
        <span class="text-xs"> Storage </span>
      </div>
      <div class="w-full h-2 rounded-full bg-[#2e2e44] mb-2 overflow-hidden">
        <div
          aria-label="Storage usage progress bar"
          class="h-2 rounded-full bg-[#3cb371]"
          style="width: 20.9%"
        ></div>
      </div>
      <p class="text-xs text-[#a0a0b8] mb-2">418.15 MB of 2 GB used</p>
      <button
        class="w-full bg-[#4b4b66] text-xs py-1 rounded-md hover:bg-[#5c5c7d] transition"
        type="button"
      >
        Get more storage
      </button>
    </div>
  </aside>
</template>
