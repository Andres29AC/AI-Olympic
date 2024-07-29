import { FaUser, FaRobot } from 'react-icons/fa';

type ChatBubbleProps = {
  content: string;
  role: 'User' | 'DocOlympic';
};

export default function ChatBubble({ content, role }: ChatBubbleProps) {
  return (
    <div className="flex justify-center mb-4">
      <div className={`flex items-start max-w-[410px] ${role === 'User' ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white text-xl mr-2 dark:bg-blue-600 dark:text-gray-200">
          {role === 'User' ? <FaUser /> : <FaRobot />}
        </div>
        <div
          className={`flex-1 p-4 border rounded-xl shadow-lg ${
            role === 'User'
              ? 'bg-blue-500 text-white border-blue-600'
              : 'bg-gray-300 text-gray-900 border-gray-400'
          }`}
        >
          <p className="text-sm font-normal">{content}</p>
        </div>
      </div>
    </div>
  );
}
