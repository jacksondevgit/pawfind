import { defineStore } from 'pinia';
import { ref } from 'vue';
import { User } from './user-store';

export type Post = {
  id: number;
  user: User;
  title: string;
  description: string;
  tags: string[];
  photo?: string | undefined;
  gender?: string | undefined;
};

export const usePostStore = defineStore(
  'post',
  () => {
    const posts = ref<Post[]>([]);

    const create = (post: Post): string | undefined => {
      const existingPost = posts.value?.find(
        (u) => u.title === post.title && u.user === post.user
      );

      if (existingPost) {
        return 'Post already exists';
      }

      post.id = posts.value.length + 1;

      posts.value?.push(post);
    };

    return { posts, create };
  },
  { persist: true }
);
