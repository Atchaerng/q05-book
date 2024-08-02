import React from 'react'

function Profile() {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold sm:text-4xl">
        หนังสือ คือ ชีวิต อ่านวันละนิด จิตจะได้แจ่มใส
      </h2>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img
          alt=""
          src="https://t1.blockdit.com/photos/2019/09/5d8c391bf5d8a122ce312e76.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-16">
        <article className="space-y-4 text-gray-600">
          <p>
          "The more that you read, the more things you will know. The more that you learn, the more places you'll go." Dr. Seuss, I Can Read With My Eyes Shut!" "ยิ่งเราอ่านมากเท่าไหร่ เราก็ยิ่งรู้เยอะมากขึ้นเท่านั้น ยิ่งเราเรียนรู้มากขึ้นเท่าไหร่ ก็ยิ่งมีสถานที่ที่เราจะไปมากขึ้นเท่านั้น" ดร.ซูสส์ นักสร้างสรรค์หนังสือเด็ก จากหนังสือ I Can Read With My Eyes Shut!"
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum explicabo quidem
            voluptatum voluptas illo accusantium ipsam quis, vel mollitia? Vel provident culpa
            dignissimos possimus, perferendis consectetur odit accusantium dolorem amet voluptates
            aliquid, ducimus tempore incidunt quas. Veritatis molestias tempora distinctio
            voluptates sint! Itaque quasi corrupti, sequi quo odit illum impedit!
          </p>
        </article>
      </div>
    </div>
  </div>
</section>
  )
}

export default Profile