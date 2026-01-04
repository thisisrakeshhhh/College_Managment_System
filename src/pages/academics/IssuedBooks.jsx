import React from 'react';

const IssuedBooks = () => {
    const books = [
        { title: 'Concepts of Physics', author: 'H.C. Verma', issueDate: '2025-12-15', dueDate: '2026-01-15', status: 'Due Soon' },
        { title: 'Organic Chemistry', author: 'Morrison Boyd', issueDate: '2025-12-20', dueDate: '2026-01-20', status: 'Regular' },
        { title: 'Calculus Vol 1', author: 'I.A. Maron', issueDate: '2025-11-28', dueDate: '2025-12-28', status: 'Overdue' }
    ];

    return (
        <div className="books-page">
            <h2 className="section-title">Library | Issued Books</h2>

            <div style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                        <tr>
                            <th style={{ padding: '16px 24px', color: '#64748b', fontWeight: 'bold', fontSize: '13px' }}>BOOK TITLE</th>
                            <th style={{ padding: '16px 24px', color: '#64748b', fontWeight: 'bold', fontSize: '13px' }}>AUTHOR</th>
                            <th style={{ padding: '16px 24px', color: '#64748b', fontWeight: 'bold', fontSize: '13px' }}>ISSUE DATE</th>
                            <th style={{ padding: '16px 24px', color: '#64748b', fontWeight: 'bold', fontSize: '13px' }}>DUE DATE</th>
                            <th style={{ padding: '16px 24px', color: '#64748b', fontWeight: 'bold', fontSize: '13px' }}>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, index) => (
                            <tr key={index} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '20px 24px', color: '#1e293b', fontWeight: '600' }}>{book.title}</td>
                                <td style={{ padding: '20px 24px', color: '#64748b' }}>{book.author}</td>
                                <td style={{ padding: '20px 24px', color: '#64748b' }}>{book.issueDate}</td>
                                <td style={{ padding: '20px 24px', color: '#64748b' }}>{book.dueDate}</td>
                                <td style={{ padding: '20px 24px' }}>
                                    <span style={{
                                        padding: '4px 12px',
                                        borderRadius: '20px',
                                        fontSize: '11px',
                                        fontWeight: '800',
                                        textTransform: 'uppercase',
                                        background: book.status === 'Overdue' ? '#fef2f2' : (book.status === 'Due Soon' ? '#fffbeb' : '#f0fdf4'),
                                        color: book.status === 'Overdue' ? '#ef4444' : (book.status === 'Due Soon' ? '#d97706' : '#22c55e')
                                    }}>
                                        {book.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
                <button className="btn-primary" style={{ padding: '12px 24px' }}>
                    <i className="fas fa-search" style={{ marginRight: '8px' }}></i> Search Library
                </button>
                <button style={{
                    padding: '12px 24px',
                    borderRadius: '10px',
                    border: '1px solid #e2e8f0',
                    background: 'white',
                    color: '#64748b',
                    fontWeight: '600'
                }}>
                    History
                </button>
            </div>
        </div>
    );
};

export default IssuedBooks;
