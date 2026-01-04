import React from 'react';

const Galleries = () => {
    const albums = [
        { title: 'Annual Day 2025', count: 45, date: 'Dec 15, 2025', cover: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=80' },
        { title: 'Inter-School Sports', count: 32, date: 'Nov 20, 2025', cover: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?w=500&q=80' },
        { title: 'Science Exhibition', count: 28, date: 'Oct 10, 2025', cover: 'https://images.unsplash.com/photo-1541339907198-e08759df9a13?w=500&q=80' }
    ];

    return (
        <div className="galleries-page">
            <h2 className="section-title">Photo & Video Galleries</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '25px' }}>
                {albums.map((album, index) => (
                    <div key={index} style={{
                        background: 'white',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                        border: '1px solid #f1f5f9',
                        cursor: 'pointer'
                    }}>
                        <div style={{ height: '200px', position: 'relative' }}>
                            <img src={album.cover} alt={album.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', bottom: '15px', right: '15px', background: 'rgba(0,0,0,0.6)', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '12px' }}>
                                <i className="fas fa-image" style={{ marginRight: '8px' }}></i>
                                {album.count} Photos
                            </div>
                        </div>
                        <div style={{ padding: '20px' }}>
                            <h3 style={{ margin: '0 0 5px 0', color: '#1e293b' }}>{album.title}</h3>
                            <p style={{ color: '#94a3b8', fontSize: '13px', margin: 0 }}>Date: {album.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Galleries;
