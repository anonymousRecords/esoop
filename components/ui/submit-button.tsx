interface SubmitButtonProps {
  isSubmitting: boolean;
}

export const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => (
  <div className="flex justify-center pt-8">
    <button
      type="submit"
      className={`
        w-full px-[40px] py-[10px] rounded-lg bg-[#17c1a0] text-white font-bold
        hover:bg-[#17c1a0]/30 focus:outline-none
        transition-colors duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        text-xs
      `}
      disabled={isSubmitting}
    >
      {isSubmitting ? '매물 등록 진행중' : '매물 등록 완료'}
    </button>
  </div>
);
