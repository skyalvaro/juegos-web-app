export default function PostsLayout({ children }) {
    return (
        <div>
            <marquee style={{ background: '#fff', color: 'purple'}}>Esta web esta en desarrollo</marquee>
            {children}
        </div>
    )
}