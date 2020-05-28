import React from 'react'
import Router from 'next/router'
import redirect from '../core/routing/redirect'

const redirectPath = "docs"

function Index() {
  Router.push(redirectPath)
}

Index.getInitialProps = async (ctx) => {
  redirect(ctx, redirectPath)
  return {}
}

export default Index;
