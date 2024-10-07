const NewsletterSection = () => {
    return (
      <div className="bg-black text-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Keep up with the latest</h2>
        <form className="flex justify-center">
          <input type="email" placeholder="Enter your email" className="p-3 rounded-l-full focus:outline-none"/>
          <button className="bg-yellow-500 px-6 py-3 rounded-r-full text-black font-semibold">Subscribe</button>
        </form>
      </div>
    );
  };
  
  export default NewsletterSection;
  