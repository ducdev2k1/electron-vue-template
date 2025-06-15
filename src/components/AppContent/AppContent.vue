<template>
  <div class="flex justify-between items-start mb-4">
    <div>
      <h1 class="text-white text-2xl font-semibold mb-1">Activity</h1>
      <p class="text-[#a0a0b8] text-sm">Paused</p>
    </div>
    <button class="bg-[#4b4b66] text-xs text-white py-2 px-4 rounded-md hover:bg-[#5c5c7d] transition" type="button">
      Resume sync
    </button>
  </div>
  <table class="w-full text-left text-sm text-[#a0a0b8] border-separate border-spacing-y-1">
    <thead>
      <tr class="border-b border-[#3b3b4f]">
        <th class="pl-2 pb-2 font-normal text-[#a0a0b8] w-[40%]">Name</th>
        <th class="pb-2 font-normal text-[#a0a0b8] w-[30%]">Folder</th>
        <th class="pb-2 font-normal text-[#a0a0b8] w-[10%]">Size</th>
        <th class="pb-2 font-normal text-[#a0a0b8] w-[20%]">Synced</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-[#3b3b4f]">
        <td class="pl-2 py-1 flex items-center gap-1 text-white">
          <i class="fas fa-arrow-up text-[#a0a0b8]"></i>
          <i class="fas fa-minus-circle text-[#a0a0b8]"></i>
          <img
            alt="Word document icon"
            class="inline-block"
            height="16"
            src="https://storage.googleapis.com/a1aa/image/c9f238e8-23fb-4c3b-cf64-1ce0ab5423f8.jpg"
            width="16" />
          <span class="underline cursor-pointer">file-15.docx</span>
        </td>
        <td class="py-1">
          <a class="underline text-[#6ea0b8] hover:text-[#8fc0d8]" href="#">PineTools.com ...</a>
        </td>
        <td class="py-1">5 KB</td>
        <td class="py-1">a minute ago</td>
      </tr>
      <tr class="border-b border-[#3b3b4f]">
        <td class="pl-2 py-1 flex items-center gap-1 text-white">
          <i class="fas fa-arrow-up text-[#a0a0b8]"></i>
          <i class="fas fa-minus-circle text-[#a0a0b8]"></i>
          <img
            alt="Word document icon"
            class="inline-block"
            height="16"
            src="https://storage.googleapis.com/a1aa/image/c9f238e8-23fb-4c3b-cf64-1ce0ab5423f8.jpg"
            width="16" />
          <span class="underline cursor-pointer">file-151.docx</span>
        </td>
        <td class="py-1">
          <a class="underline text-[#6ea0b8] hover:text-[#8fc0d8]" href="#">PineTools.com ...</a>
        </td>
        <td class="py-1">5 KB</td>
        <td class="py-1">a minute ago</td>
      </tr>
      <tr class="border-b border-[#3b3b4f]">
        <td class="pl-2 py-1 flex items-center gap-1 text-white">
          <i class="fas fa-arrow-up text-[#a0a0b8]"></i>
          <i class="fas fa-minus-circle text-[#a0a0b8]"></i>
          <img
            alt="Word document icon"
            class="inline-block"
            height="16"
            src="https://storage.googleapis.com/a1aa/image/c9f238e8-23fb-4c3b-cf64-1ce0ab5423f8.jpg"
            width="16" />
          <span class="underline cursor-pointer">file-152.docx</span>
        </td>
        <td class="py-1">
          <a class="underline text-[#6ea0b8] hover:text-[#8fc0d8]" href="#">PineTools.com ...</a>
        </td>
        <td class="py-1">5 KB</td>
        <td class="py-1">a minute ago</td>
      </tr>
      <tr class="border-b border-[#3b3b4f]">
        <td class="pl-2 py-1 flex items-center gap-1 text-white">
          <i class="fas fa-arrow-up text-[#a0a0b8]"></i>
          <i class="fas fa-minus-circle text-[#a0a0b8]"></i>
          <img
            alt="Word document icon"
            class="inline-block"
            height="16"
            src="https://storage.googleapis.com/a1aa/image/c9f238e8-23fb-4c3b-cf64-1ce0ab5423f8.jpg"
            width="16" />
          <span class="underline cursor-pointer">file-150.docx</span>
        </td>
        <td class="py-1">
          <a class="underline text-[#6ea0b8] hover:text-[#8fc0d8]" href="#">PineTools.com ...</a>
        </td>
        <td class="py-1">5 KB</td>
        <td class="py-1">a minute ago</td>
      </tr>
      <tr class="border-b border-[#3b3b4f]">
        <td class="pl-2 py-1 flex items-center gap-1 text-white">
          <i class="fas fa-arrow-up text-[#a0bfa0]"></i>
          <i class="fas fa-check-circle text-[#3cb371]"></i>
          <img
            alt="Word document icon"
            class="inline-block"
            height="16"
            src="https://storage.googleapis.com/a1aa/image/c9f238e8-23fb-4c3b-cf64-1ce0ab5423f8.jpg"
            width="16" />
          <span class="underline cursor-pointer">file-148.docx</span>
        </td>
        <td class="py-1">
          <a class="underline text-[#6ea0b8] hover:text-[#8fc0d8]" href="#">PineTools.com ...</a>
        </td>
        <td class="py-1">5 KB</td>
        <td class="py-1">a minute ago</td>
      </tr>
      <tr class="border-b border-[#3b3b4f]">
        <td class="pl-2 py-1 flex items-center gap-1 text-white">
          <i class="fas fa-arrow-up text-[#a0bfa0]"></i>
          <i class="fas fa-check-circle text-[#3cb371]"></i>
          <img
            alt="Word document icon"
            class="inline-block"
            height="16"
            src="https://storage.googleapis.com/a1aa/image/c9f238e8-23fb-4c3b-cf64-1ce0ab5423f8.jpg"
            width="16" />
          <span class="underline cursor-pointer">file-149.docx</span>
        </td>
        <td class="py-1">
          <a class="underline text-[#6ea0b8] hover:text-[#8fc0d8]" href="#">PineTools.com ...</a>
        </td>
        <td class="py-1">5 KB</td>
        <td class="py-1">a minute ago</td>
      </tr>
      <tr class="border-b border-[#3b3b4f]">
        <td class="pl-2 py-1 flex items-center gap-1 text-white">
          <i class="fas fa-arrow-up text-[#a0bfa0]"></i>
          <i class="fas fa-check-circle text-[#3cb371]"></i>
          <img
            alt="Word document icon"
            class="inline-block"
            height="16"
            src="https://storage.googleapis.com/a1aa/image/c9f238e8-23fb-4c3b-cf64-1ce0ab5423f8.jpg"
            width="16" />
          <span class="underline cursor-pointer">file-146.docx</span>
        </td>
        <td class="py-1">
          <a class="underline text-[#6ea0b8] hover:text-[#8fc0d8]" href="#">PineTools.com ...</a>
        </td>
        <td class="py-1">5 KB</td>
        <td class="py-1">a minute ago</td>
      </tr>
      <tr class="border-b border-[#3b3b4f]">
        <td class="pl-2 py-1 flex items-center gap-1 text-white">
          <i class="fas fa-arrow-up text-[#a0bfa0]"></i>
          <i class="fas fa-check-circle text-[#3cb371]"></i>
          <img
            alt="Word document icon"
            class="inline-block"
            height="16"
            src="https://storage.googleapis.com/a1aa/image/c9f238e8-23fb-4c3b-cf64-1ce0ab5423f8.jpg"
            width="16" />
          <span class="underline cursor-pointer">file-147.docx</span>
        </td>
        <td class="py-1">
          <a class="underline text-[#6ea0b8] hover:text-[#8fc0d8]" href="#">PineTools.com ...</a>
        </td>
        <td class="py-1">5 KB</td>
        <td class="py-1">a minute ago</td>
      </tr>
      <tr class="border-b border-[#3b3b4f]">
        <td class="pl-2 py-1 flex items-center gap-1 text-white">
          <i class="fas fa-arrow-up text-[#a0bfa0]"></i>
          <i class="fas fa-check-circle text-[#3cb371]"></i>
          <img
            alt="Word document icon"
            class="inline-block"
            height="16"
            src="https://storage.googleapis.com/a1aa/image/c9f238e8-23fb-4c3b-cf64-1ce0ab5423f8.jpg"
            width="16" />
          <span class="underline cursor-pointer">file-143.docx</span>
        </td>
        <td class="py-1">
          <a class="underline text-[#6ea0b8] hover:text-[#8fc0d8]" href="#">PineTools.com ...</a>
        </td>
        <td class="py-1">5 KB</td>
        <td class="py-1">a minute ago</td>
      </tr>
      <tr class="border-b border-[#3b3b4f]">
        <td class="pl-2 py-1 flex items-center gap-1 text-white">
          <i class="fas fa-arrow-up text-[#a0bfa0]"></i>
          <i class="fas fa-check-circle text-[#3cb371]"></i>
          <img
            alt="Word document icon"
            class="inline-block"
            height="16"
            src="https://storage.googleapis.com/a1aa/image/c9f238e8-23fb-4c3b-cf64-1ce0ab5423f8.jpg"
            width="16" />
          <span class="underline cursor-pointer">file-144.docx</span>
        </td>
        <td class="py-1">
          <a class="underline text-[#6ea0b8] hover:text-[#8fc0d8]" href="#">PineTools.com ...</a>
        </td>
        <td class="py-1">5 KB</td>
        <td class="py-1">a minute ago</td>
      </tr>
      <tr class="border-b border-[#3b3b4f]">
        <td class="pl-2 py-1 flex items-center gap-1 text-white">
          <i class="fas fa-arrow-up text-[#a0bfa0]"></i>
          <i class="fas fa-check-circle text-[#3cb371]"></i>
          <img
            alt="Word document icon"
            class="inline-block"
            height="16"
            src="https://storage.googleapis.com/a1aa/image/c9f238e8-23fb-4c3b-cf64-1ce0ab5423f8.jpg"
            width="16" />
          <span class="underline cursor-pointer">file-145.docx</span>
        </td>
        <td class="py-1">
          <a class="underline text-[#6ea0b8] hover:text-[#8fc0d8]" href="#">PineTools.com ...</a>
        </td>
        <td class="py-1">5 KB</td>
        <td class="py-1">a minute ago</td>
      </tr>
      <tr class="border-b border-[#3b3b4f]">
        <td class="pl-2 py-1 flex items-center gap-1 text-white">
          <i class="fas fa-arrow-up text-[#a0bfa0]"></i>
          <i class="fas fa-check-circle text-[#3cb371]"></i>
          <img
            alt="Word document icon"
            class="inline-block"
            height="16"
            src="https://storage.googleapis.com/a1aa/image/c9f238e8-23fb-4c3b-cf64-1ce0ab5423f8.jpg"
            width="16" />
          <span class="underline cursor-pointer">file-142.docx</span>
        </td>
        <td class="py-1">
          <a class="underline text-[#6ea0b8] hover:text-[#8fc0d8]" href="#">PineTools.com ...</a>
        </td>
        <td class="py-1">5 KB</td>
        <td class="py-1">a minute ago</td>
      </tr>
      <tr class="border-b border-[#3b3b4f]">
        <td class="pl-2 py-1 flex items-center gap-1 text-white">
          <i class="fas fa-arrow-up text-[#a0bfa0]"></i>
          <i class="fas fa-check-circle text-[#3cb371]"></i>
          <img
            alt="Word document icon"
            class="inline-block"
            height="16"
            src="https://storage.googleapis.com/a1aa/image/c9f238e8-23fb-4c3b-cf64-1ce0ab5423f8.jpg"
            width="16" />
          <span class="underline cursor-pointer">file-14.docx</span>
        </td>
        <td class="py-1">
          <a class="underline text-[#6ea0b8] hover:text-[#8fc0d8]" href="#">PineTools.com ...</a>
        </td>
        <td class="py-1">5 KB</td>
        <td class="py-1">a minute ago</td>
      </tr>
      <tr>
        <td class="pl-2 py-1 flex items-center gap-1 text-white">
          <i class="fas fa-arrow-up text-[#a0bfa0]"></i>
          <i class="fas fa-check-circle text-[#3cb371]"></i>
          <img
            alt="Word document icon"
            class="inline-block"
            height="16"
            src="https://storage.googleapis.com/a1aa/image/c9f238e8-23fb-4c3b-cf64-1ce0ab5423f8.jpg"
            width="16" />
          <span class="underline cursor-pointer">file-141.docx</span>
        </td>
        <td class="py-1">
          <a class="underline text-[#6ea0b8] hover:text-[#8fc0d8]" href="#">PineTools.com ...</a>
        </td>
        <td class="py-1">5 KB</td>
        <td class="py-1">a minute ago</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts"></script>

<style scoped></style>
