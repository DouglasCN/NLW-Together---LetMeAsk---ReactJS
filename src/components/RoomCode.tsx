import copyImg from '../assets/images/copy.svg';

import '../styles/room-code.scss';

type RomCodeProps = {
    code: string;
}

export function RoomCode(props: RomCodeProps) {
    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(props.code);
    }

    return (
        <button className="room-code" onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="" />
            </div>
            <span>Sala #{props.code}</span>
        </button>
    )
}