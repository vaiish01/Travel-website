export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-lg font-semibold">Contact Us</h2>
          

         {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div className="flex items-center justify-center gap-2">
            <span>📍</span> C - 60j, Sector - 4, Pune - 411002    
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>📞</span> +91-9222333001 
          </div>
          <span> 📧</span>   info@Travelista.com
          
          💻 Skype: TravelistaPune
        </div>
        </div>

        <hr className="border-gray-200 my-4" />
        
        <p className="text-center text-sm text-gray-400 mt-6">
          Copyright&copy; 2025 Travelista Pvt. Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
