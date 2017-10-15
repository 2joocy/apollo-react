import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
import Link from './Link'

class LinkList extends Component {

  render() {

    const linksToRender = [{
      id: '1',
      description: 'The Coolest GraphQL Backend 😎',
      url: 'https://www.graph.cool'
    }, {
      id: '2',
      description: 'The Best GraphQL Client',
      url: 'http://dev.apollodata.com/'
    }]

    // 1
  if (this.props.allLinksQuery && this.props.allLinksQuery.loading) {
    return <div>Loading</div>
  }

  // 2
  if (this.props.allLinksQuery && this.props.allLinksQuery.error) {
    return <div>Error</div>
  }

  // 3
  const linksToRender = this.props.allLinksQuery.allLinks

    return (
      <div>
      {linksToRender.map((link, index) => (
        <Link key={link.id} index={index} link={link}/>
      ))}
      </div>
    )
  }

}

const ALL_LINKS_QUERY = gql`
# 2
query AllLinksQuery {
  allLinks {
    id
    createdAt
    url
    description
  }
}
`

// 3
export default graphql(ALL_LINKS_QUERY, { name: 'allLinksQuery' }) (LinkList)