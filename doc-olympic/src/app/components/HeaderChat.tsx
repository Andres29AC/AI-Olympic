import Link from 'next/link';

export default function HeaderChat() {
  return (
    <section>
      <ul>
        <li>
          <Link href="/chat">
            <button className="hover:underline bg-green-500 text-white font-bold py-2 px-4 rounded">
              Chat Olympic Paris 2024
            </button>
          </Link>
        </li>
      </ul>
    </section>
  );
}
