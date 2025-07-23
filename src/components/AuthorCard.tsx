import { getAuthor } from '../data/authors';

interface AuthorCardProps {
  authorId: string;
  showFullBio?: boolean;
}

export default function AuthorCard({ authorId, showFullBio = false }: AuthorCardProps) {
  const author = getAuthor(authorId);

  if (!author) {
    return (
      <div className="author-card">
        <p>Author not found</p>
      </div>
    );
  }

  return (
    <div className="author-card">
      <div className="author-header">
        {author.avatar && (
          <img 
            src={author.avatar} 
            alt={`${author.name} avatar`} 
            className="author-avatar"
            onError={(e) => {
              // Fallback to a default avatar if image fails to load
              (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(author.name)}&background=8b4513&color=fff&size=64`;
            }}
          />
        )}
        <div className="author-info">
          <h3 className="author-name">{author.name}</h3>
          {author.role && author.company && (
            <p className="author-role">{author.role} @ {author.company}</p>
          )}
          {author.location && (
            <p className="author-location">{author.location}</p>
          )}
        </div>
      </div>

      {showFullBio && (
        <div className="author-bio">
          <p>{author.bio}</p>
          
          {author.expertise && author.expertise.length > 0 && (
            <div className="author-expertise">
              <h4>Expertise</h4>
              <div className="expertise-tags">
                {author.expertise.map((skill, index) => (
                  <span key={index} className="expertise-tag">{skill}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {author.social && (
        <div className="author-social">
          {author.social.github && (
            <a href={author.social.github} target="_blank" rel="noopener noreferrer" className="social-link">
              <span>GitHub</span>
            </a>
          )}
          {author.social.linkedin && (
            <a href={author.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
              <span>LinkedIn</span>
            </a>
          )}
          {author.social.twitter && (
            <a href={author.social.twitter} target="_blank" rel="noopener noreferrer" className="social-link">
              <span>Twitter</span>
            </a>
          )}
          {author.social.website && (
            <a href={author.social.website} target="_blank" rel="noopener noreferrer" className="social-link">
              <span>Website</span>
            </a>
          )}
          {author.social.email && (
            <a href={`mailto:${author.social.email}`} className="social-link">
              <span>Email</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
} 