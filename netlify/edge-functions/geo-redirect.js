export default async (request, context) => {
  // Netlify নিজে থেকে ভিজিটরের দেশ শনাক্ত করে
  const country = context.geo?.country?.code || 'BD'; // 'BD' ডিফল্ট

  // শুধু USA-কে CPA অফারে পাঠান
  if (country === 'US') {
    // 🔴 আপনার CPA অফারের লিংক দিন
    return Response.redirect('https://www.af9m8trk.com/TLC11CXK/PB7121EP/', 302);
  } 
  // বাকি সব দেশ (বাংলাদেশ, ভারত, ইউকে সহ) NDTV-তে পাঠান
  else {
    return Response.redirect('https://www.ndtv.com', 302);
  }
};

// কোন পাথে এই ফাংশন কাজ করবে
export const config = {
  path: "/*",
};
