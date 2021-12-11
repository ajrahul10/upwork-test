import { useState, useRef } from "react"

const Card = props => {

    const data = props.data
    const [expandSubheading, setExpandSubheading] = useState(false)
    const [comments, setComments] = useState(data.comments)
    const commentRef = useRef()
  
    const toggleExpandSubheading = () => {
      setExpandSubheading(prev => {
        return !prev
      })
    }
  
    const handleInput = e => {
      if (e.key === 'Enter') {
        const commentObj = {
          value: commentRef.current.value,
          avatar: data.logo,
          name: 'Eleanor Pena',
          reply: []
        }
        setComments(comments => {
          return [...comments, commentObj]
        })
        commentRef.current.value = ''
      }
    }
  
    let expandSubHeadingStyle = ''
    if (!expandSubheading) {
      expandSubHeadingStyle = 'h-12 line-clamp-2'
    }
  
    return (
      <div className="bg-primary mx-auto rounded-lg font-medium w-card pt-6">
        <div className="font-heading px-6 text-white pb-3 text-lg font-bold">{data.title}</div>
  
        <div className="px-6">
          <p className={`text-white opacity-70 ${expandSubHeadingStyle}`}>
            {data.desc}
          </p>
          <p
            onClick={toggleExpandSubheading}
            className="font-heading text-white text-xs opacity-50 pt-3 cursor-pointer inline-block">
            {expandSubheading ? "see less..." : "see more..."}
          </p>
        </div>
  
        <div className="font-heading my-6 px-6 flex">
          <span
            className="bg-label text-white px-3 py-1/2 rounded-3xl text-xxs my-1">
            {data.label}
          </span>
          <span className="bg-divider w-line h-4 my-auto ml-3 mx-1"></span>
          <span className="flex">
            <span className="mx-1"><img className="w-8 h-8" src={data.logo} alt="logo" /></span>
            <span className="text-normal leading-8 text-white">{data.postedBy}</span>
          </span>
          <span className="bg-divider w-line h-4 my-auto mx-3"></span>
          <span className="font-heading text-normal leading-8 text-white opacity-50">3h ago</span>
        </div>
  
        <div className="bg-inputBox bg-opacity-10 px-6 py-6">
          {comments.length > 0 &&
            <div className="flex mb-6">
              <span
                className="font-heading bg-inputBox bg-opacity-20
               text-white pl-5 pr-4 py-3 rounded-full text-xs cursor-pointer">
                Most Recent <svg xmlns="http://www.w3.org/2000/svg" className="inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </span>
            </div>
          }
          {
            comments.map((comment, idx) => (
              <div className="flex mb-5" key={idx}>
                <div><img className="w-8 h-8" src={comment.avatar} alt="logo" /></div>
                <div className="flex flex-col px-1">
                  <div className="text-white pt-1 font-heading">{comment.name}</div>
                  <div className="text-white opacity-80">{comment.value}</div>
                </div>
              </div>
            ))
          }
  
  
          <div className="h-line bg-divider w-full"></div>
  
          <div className="mt-5 text-white">
            <input
              className="bg-inputBox bg-opacity-20 placeholder-white placeholder-opacity-50
                         py-3.5 rounded-full px-5 w-full"
              ref={commentRef}
              onKeyDown={handleInput}
              type="text"
              placeholder="How can you help with this Request?" />
          </div>
  
        </div>
      </div>
    )
  }

  export default Card