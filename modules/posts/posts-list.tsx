import { Header } from "../../components/layout/header"
import { PageWrapper, PageWrapperWithHeader } from "../../components/layout/page-wrapper"

export const PostsList : React.FunctionComponent<any> = (props) => {
    return (
        <PageWrapperWithHeader title={'Posts'}>

            <div className="py-6">
                <span className="text-3xl border-b border-Jet">Recent Interests</span>
                <br/>
                <br/> 
                <span className="text-xl !leading-10">Self-sufficiency.</span> 
            </div>
        </PageWrapperWithHeader>
    )
}