import { useState, useEffect } from "react";

// 이미지 존재 여부를 확인하는 함수
async function checkImageExists(imageUrl: string): Promise<boolean> {
  try {
    const response = await fetch(imageUrl, { method: 'HEAD' });
    return response.status === 200;
  } catch (error: unknown) {
    console.error(`Error checking image existence: ${(error as Error).message}`);
    return false;
  }
}

// useImageExists 훅
export function useImageExists(imageUrl: string): boolean {
  const [exists, setExists] = useState<boolean>(false);

  useEffect(() => {
    if (imageUrl) {
      checkImageExists(imageUrl).then(setExists);
    }
  }, [imageUrl]);

  return exists;
}
