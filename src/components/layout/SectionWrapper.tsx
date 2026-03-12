interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper = ({ children, className = "", id }: SectionWrapperProps) => (
  <section
    id={id}
    className={`mt-[30px] py-[var(--section-spacing-mobile)] md:py-[var(--section-spacing)] ${className}`}
  >
    <div className="mx-auto max-w-[1200px] px-5 md:px-8">
      {children}
    </div>
  </section>
);

export default SectionWrapper;
