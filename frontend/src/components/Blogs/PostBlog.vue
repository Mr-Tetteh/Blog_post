<script setup>
import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid'
import useBlog from "@/composerbles/blog.js";

const{storeBlog} = useBlog()

const createBlog = async () => {
  await storeBlog({...,form})
}
</script>

<template>
  <div class="flex ml-96 ">
    <form  @submit.prevent="createPost">
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <div class="text-center font-bold text-4xl ">WRITE BLOG</div>
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-4">
              <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Title</label>
              <div class="mt-2">
                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input v-model="form.title" type="text" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Title"/>
                </div>
              </div>
            </div>

            <div class="col-span-full">
              <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Blog</label>
              <div class="mt-2">
                <textarea v-model="form.body" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  placeholder="Write blog here" />
              </div>
            </div>


            <div class="col-span-full">
              <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
              <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
<!--                <div class="text-center">-->
<!--                  <PhotoIcon class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />-->
<!--                  <div class="mt-4 flex text-sm leading-6 text-gray-600">-->
<!--                    <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">-->
<!--                      <span>Upload a file</span>-->
<!--                      <input id="file-upload" name="file-upload" type="file" class="sr-only" />-->
<!--                    </label>-->
<!--                    <p class="pl-1">or drag and drop</p>-->
<!--                  </div>-->
<!--                  <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>-->
<!--                </div>-->
                <input v-model="form.image" type="file" class="block text-sm font-medium leading-6 text-gray-900">
              </div>
            </div>
          </div>
        </div>


      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
        <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
      </div>
    </form>
  </div>

</template>

<style scoped>

</style>