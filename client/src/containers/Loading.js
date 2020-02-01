import React from 'react'

import { useSelector } from 'react-redux'

import styled from 'styled-components'

import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Lottie from "react-lottie"
import animationData from "../lottie/loading.json"

const Loading = () => {
    const isRequesting = useSelector((state) => state.RequestReducer.isRequesting)

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    return (
        <>
            <Dialog
                open={isRequesting}
            >
                <DialogContent>
                    <NoTouchLottie>
                        <Lottie options={defaultOptions} height={70} width={70} />
                    </NoTouchLottie>
                    <P>Loading...</P>
                </DialogContent>
            </Dialog>
        </>
    )
}

const P = styled.p`
    margin-top: 0;
`

const NoTouchLottie = styled.div`
    pointer-events: none;
`

export default Loading