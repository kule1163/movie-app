import { IoLogoInstagram } from 'react-icons/io';
import { IoLogoTwitter } from 'react-icons/io';
import { IoLogoLinkedin } from 'react-icons/io';
import { AiOutlineMail} from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';
import { IconType } from 'react-icons';

interface SocialIcon {
    id: string;
    icon: IconType;
}

export const socialIcons:SocialIcon[] = [
    {id: uuidv4(), icon: IoLogoInstagram},
    {id: uuidv4(), icon: IoLogoTwitter},
    {id: uuidv4(), icon: IoLogoLinkedin},
    {id: uuidv4(), icon: AiOutlineMail},
]