import React from 'react'
import ReactDOM from 'react-dom'
import Faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail
					author="Alex"
					timeAgo="Today 4:00PM"
					content="Nice blog post"
					avatar={Faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Sam"
					timeAgo="Today 2:00PM"
					content="Awsome blog post"
					avatar={Faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Ben"
					timeAgo="Yesterday 3:00AM"
					content="Nice blog comment"
					avatar={Faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	)
}


ReactDOM.render(
  < App />,
  document.querySelector("#root")
)