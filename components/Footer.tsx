export default function Footer() {
  return (
    <footer id="footer" className="py-10 text-center bg-white border-t">
      <p className="text-gray-600">
        © {new Date().getFullYear()} Soudavanh LSTP. All rights reserved.
      </p>
      <p className="text-sm mt-2">Email: soudavanhlstp@gmail.com | Phone: 020 99252207</p>
    </footer>
  );
}
