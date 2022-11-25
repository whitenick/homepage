import { Header } from "../shared/header"
import { PageWrapper } from "../shared/page-wrapper"

export const PostsList : React.FunctionComponent<any> = (props) => {
    return (
        <PageWrapper title={'Posts'}>
            <Header/>
            <div className="py-6">
                <span className="text-3xl">Recent Interests.</span>
                <br/>
                <br/> 
                <span className="text-xl !leading-10">Self-sufficiency.</span> 
            </div>
        </PageWrapper>
    )
}