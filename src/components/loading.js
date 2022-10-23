import { ThreeDots } from "react-loader-spinner";

export default function Loadingdiv({ botao }) {
    return (
        <>
            <ThreeDots 
                height={botao === 1? "10" : (botao === 2? "20" : "40")}
                width={botao === 1? "100" : (botao === 2? "303" : "335")}
                radius="10"
                color={botao ===3? "#52B6FF" :"#FFFFFF" }
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </>
    )
}