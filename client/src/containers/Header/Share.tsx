import React from 'react'
import styled from 'styled-components'

import { useDispatch } from 'react-redux'

import * as actions from '../../actions'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import ShareIcon from '@material-ui/icons/Share'
import Divider from '@material-ui/core/Divider'

// SNS用シェアボタン
import {
    FacebookShareButton,
    TwitterShareButton,
    LineShareButton,
    TumblrShareButton,
    InstapaperShareButton,
    EmailShareButton,

    FacebookIcon,
    TwitterIcon,
    LineIcon,
    TumblrIcon,
    InstapaperIcon,
    EmailIcon,
} from 'react-share'

// クリップボードにコピー
import CopyToClipboard from 'react-copy-to-clipboard'

interface Props {
    open: boolean,
    onClose: () => void
}

const ShareDialog: React.FC<Props> = props => {
    const { open, onClose } = props

    const dispatch = useDispatch()

    // シェアボタン用
    const title: string = "自動販売機"
    const shareUrl: string = "自動販売機"
    const hashTag: string[] = ['自動販売機', 'ロボット学科', '043教室', 'HEW2020', 'ロボラボ']

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle>自動販売機をシェア</DialogTitle>
            <Divider />
            <StyledDialogContent>
                <FacebookShareButton
                    url={shareUrl}
                    quote={title}
                >
                    <FacebookIcon
                        size={48}
                        round />
                </FacebookShareButton>
                <TwitterShareButton
                    url={shareUrl}
                    title={title}
                    hashtags={hashTag}
                >
                    <TwitterIcon
                        size={48}
                        round />
                </TwitterShareButton>
                <LineShareButton
                    url={shareUrl}
                    title={title}
                >
                    <LineIcon
                        size={48}
                        round />
                </LineShareButton>
            </StyledDialogContent>
            <StyledDialogContent>
                <InstapaperShareButton
                    url={shareUrl}
                    title={title}
                    windowWidth={750}
                    windowHeight={600}
                >
                    <InstapaperIcon
                        size={48}
                        round />
                </InstapaperShareButton>
                <TumblrShareButton
                    url={shareUrl}
                    title={title}
                    windowWidth={660}
                    windowHeight={460}
                >
                    <TumblrIcon
                        size={48}
                        round />
                </TumblrShareButton>
                <EmailShareButton
                    url={shareUrl}
                    title={title}
                    windowWidth={660}
                    windowHeight={460}
                >
                    <EmailIcon
                        size={48}
                        round />
                </EmailShareButton>
            </StyledDialogContent>
            <StyledDialogContent>
                <CopyToClipboard
                    text={shareUrl}
                    onCopy={() => { dispatch(actions.setNotification('success', 'クリップボードに保存しました。')) }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                    >
                        URLをコピー
                        </Button>
                </CopyToClipboard>
            </StyledDialogContent>
            <Divider />
            <DialogActions>
                <Button onClick={onClose} color="primary" autoFocus>
                    閉じる
                </Button>
            </DialogActions>
        </Dialog >
    )
}

const Share: React.FC = () => {
    const [open, setOpen] = React.useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <IconButton
                aria-label="Open Share"
                onClick={handleOpen}
            >
                <StyledShareIcon />
            </IconButton>
            <ShareDialog open={open} onClose={handleClose} />
        </>
    )
}

const StyledShareIcon = styled(ShareIcon)`
    color: white;
`

const StyledDialogContent = styled(DialogContent)`
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding: 10px;
`

export default Share