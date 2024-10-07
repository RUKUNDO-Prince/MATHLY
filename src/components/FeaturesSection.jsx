const FeaturesSection = () => {
    return (
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Feel the best experience with our features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Seamless and direct trader integration</h3>
              <p className="text-gray-600">Easily connect with traders for transactions.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">User notifications and digital wallet</h3>
              <p className="text-gray-600">Manage your wallet and get instant notifications.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FeaturesSection;
  