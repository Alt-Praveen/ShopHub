import { useEffect } from 'react'

function useTitle(title) {
  useEffect(() => {
    document.title = `${title} | ShopHub`;
  }, [title]);

  return null;
}

export default useTitle