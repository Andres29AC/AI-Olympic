import { FaUser, FaRobot } from 'react-icons/fa';

type ChatBubbleProps = {
  content: string;
  role: 'User' | 'DocOlympic';
};

export default function ChatBubble({ content, role }: ChatBubbleProps) {
  const icon = role === 'User' ? <FaUser className="inline-block mr-2" /> : <FaRobot className="inline-block mr-2" />;

  return (
    <div className="flex justify-center mb-6">
      <div className={`flex items-start max-w-lg ${role === 'User' ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className="flex items-center justify-center w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300 shadow-md mr-3">
          <img
            src={role === 'User' ? 'user.jpg' : 'ai.png'}
            alt={role === 'User' ? 'User' : 'DocOlympic'}
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className={`flex-1 p-4 border rounded-xl shadow-lg ${
            role === 'User'
              ? 'bg-blue-500 text-white border-blue-600'
              : 'bg-gray-100 text-gray-900 border-gray-200'
          }`}
        >
          <p className="text-sm font-normal">
            {icon}
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}

