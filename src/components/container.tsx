interface Props extends React.HTMLAttributes<HTMLOrSVGElement> {
  as: React.ElementType
  children: React.ReactNode
  className?: string
}

export function Container({as: Tag, children, className, ...props}:Props) {
  return (
  <Tag className={`px-4 md:px-6 xl:px-8 max-w-[1440px] mx-auto ${className}`} {...props}> 
    {children} 
  </Tag>
  )
}