const TestimonialSection = () => {
    return (
      <div className="bg-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Join 15+ million people trusting us</h2>
        <div className="relative max-w-lg mx-auto">
          <div className="testimonial p-6 rounded-lg bg-gray-100">
            <p className="mb-4">"This app has revolutionized my finances and given me the insights I needed."</p>
            <p className="font-bold">Ellena Putri</p>
          </div>
          <div className="absolute inset-0 flex justify-between items-center">
            <button className="bg-gray-300 p-2 rounded-full">Prev</button>
            <button className="bg-gray-300 p-2 rounded-full">Next</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default TestimonialSection;
  