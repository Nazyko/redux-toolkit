import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react'
import { ActionIcon } from '@mantine/core'

const Footer = () => {
  

  return (
    <div className="footer" style={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{display: 'flex', alignItems: 'center', gap: 40}}>
        <div style={{fontFamily: 'Sans-serif', fontSize: 32}}>Dummy JSON</div>
        <div>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </div>
      </div>
    </div>
    
  );
}

export { Footer }