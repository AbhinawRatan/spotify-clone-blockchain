import Image from 'next/image'

const ActivityCard = ({ title, subTitle, avatar }) => {
  return (
    <div className={`w-full flex flex-row items-center hover:bg-[#4c426e] 'bg-[#4c426e]' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2`}>
    <div className={styles.profileAvatarContainer}>
        <Image
          alt=''
          src={avatar}
          className={styles.avatar}
          width={50}
          height={50}
        />
      </div>
      <div>
        <div>{title}</div>
        <div className='opacity-60'>{subTitle}</div>
      </div>
    </div>
  )
}

export default ActivityCard

const styles = {
  profileAvatarContainer: `w-14 h-14 rounded-full -ml-2 mr-3`,
  activityCard: `flex mb-6 cursor-pointer hover:opacity-50`,
  avatar: `rounded-full object-cover`,
}
