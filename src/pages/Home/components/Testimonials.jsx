
function Testimonials() {
  return (
    <section className="p-5 m-2 grid border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
      <figure className="flex flex-col items-center justify-center text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Nice colour and fit</h3>
          <p className="my-4">Was trying to get this colour from a long time but was out of stock, But finally got it, it is as same as shown in the website.</p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
          <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
          <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div>Bonnie Green</div>
          </div>
        </figcaption>
      </figure>
      <figure className="flex flex-col items-center justify-center text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Awsome</h3>
          <p className="my-4">Very good material feel and comfort. Cool looking Tshirts</p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
          <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture" />
          <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div>Roberta Casas</div>
          </div>
        </figcaption>
      </figure>
      <figure className="flex flex-col items-center justify-center text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Best Products</h3>
          <p className="my-4">I bought a product almost a year ago and it is still in great condition.</p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
          <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
          <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div>Jese Leos</div>
          </div>
        </figcaption>
      </figure>
      <figure className="flex flex-col items-center justify-center text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Amazing</h3>
          <p className="my-4">You have many examples that can be used to create a fast prototype for your team.</p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
          <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture" />
          <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div>Joseph McFall</div>
          </div>
        </figcaption>
      </figure>
    </section>
  )
}

export default Testimonials