import Image from 'next/image';

const emojis = [
  {
    image: '/assets/svg/washroom-feedback/emoji1.svg',
  },
  {
    image: '/assets/svg/washroom-feedback/emoji2.svg',
  },
  {
    image: '/assets/svg/washroom-feedback/emoji3.svg',
  },
  {
    image: '/assets/svg/washroom-feedback/emoji4.svg',
  },
  {
    image: '/assets/svg/washroom-feedback/emoji5.svg',
  },
];

const WashroomPage = () => {
  return (
    <div className="mt-20 flex items-center justify-center flex-col -mb-[100px]">
      
      <div className="imageContainer">
        <Image
          // className="w-full h-full"
          src={'/assets/svg/washroom-feedback/tissue image.svg'}
          alt="profile image of member"
          height={250}
          width={250}
        />
      </div>
      <div className="content">
        <h1 className=" flex items-center font-Bold text-5xl text-center mt-16">
          Your Feedback Matters
        </h1>
        <div className="text-center mt-4">
          Based on your most recent visit, please rate the bathroom.
        </div>

        <div className="flex justify-center items-center gap-4 my-8">
          {emojis.length > 0 &&
            emojis.map((emoji, index) => {
              return (
                <div key={index}>
                  <Image
                    src={emoji.image}
                    alt="feedback emoji here..."
                    height={60}
                    width={60}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default WashroomPage;

