import { useRouter } from "next/router";
import { Card } from "../../components/layout/card";
import { PageWrapperWithHeader } from "../../components/layout/page-wrapper";
import { FiExternalLink } from "react-icons/fi";

const GamesPage = () => {
    const router = useRouter();

    return (
        <PageWrapperWithHeader>
            <div className="flex flex-col px-4 gap-y-4">
                <button onClick={() => router.push("/app/games/noise-meter") } className="hover:shadow">
                    <Card.Container>
                        <Card.Left>
                            <div className="flex justify-start items-center text-xl font-inconsolata">
                                Sound Blob
                            </div>
                        </Card.Left>
                        <Card.Right className="justify-end">
                            <div className="flex justify-end items-center">
                                <FiExternalLink />
                            </div>
                        </Card.Right>
                    </Card.Container>
                </button>
                <button onClick={() => router.push("/app/games/bouncing-lemon") } className="hover:shadow">
                    <Card.Container>
                        <Card.Left>
                            <div className="flex justify-start items-center text-xl font-inconsolata">
                                Bouncing Lemon
                            </div>
                        </Card.Left>
                        <Card.Right className="justify-end">
                            <div className="flex justify-end items-center">
                                <FiExternalLink />
                            </div>
                        </Card.Right>
                    </Card.Container>
                </button>
            </div>
        </PageWrapperWithHeader>
    )
}

export default GamesPage;