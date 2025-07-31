interface ValidationErrorProps {
  error?: string;
  isValid?: boolean | '';
}

export default function ValidationError({ error }: ValidationErrorProps) {
  return (
    <div className="relative self-start w-full">
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          error ? 'h-[20px] opacity-100' : 'h-0 opacity-0'
        }`}
      >
        {error && <span className="block text-left text-red-500 text-sm">{error}</span>}
      </div>
    </div>
  );
}
