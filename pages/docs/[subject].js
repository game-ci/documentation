import React from 'react'

export default function PostTemplate(props) {
  return (
    <div>
      {props.subject}
    </div>
  )
}

PostTemplate.getInitialProps = async (context) => {
  const { subject } = context.query

  return { subject }
}
