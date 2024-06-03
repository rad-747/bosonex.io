// useRouter.js
import { useRouter as useNextRouter } from 'next/router';

export const useRouter = () => {
  const router = useNextRouter();
  return router;
};

