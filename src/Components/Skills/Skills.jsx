import { useState } from 'react';
import SkillCard from './SkillCard';
import './Skills.css';
import { skillData } from './SkillData';

const Skills = () => {
    const categories = [...new Set(skillData.map(skill => skill.category))];

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    return (
        <section id="skills" className="skills-section">
            <h2 className="skills-title">Tech Stack</h2>

            {/* Category Tabs */}
            <div className="category-tabs">
                {categories.map((category, index) => (
                    <span 
                        key={index}
                        onClick={() => setSelectedCategory(category)} 
                        className={`category-tab ${selectedCategory === category ? 'active' : ''}`}
                    >
                        {category}
                    </span>
                ))}
            </div>

            <div className="skills-grid">
                {skillData
                    .filter(skill => skill.category === selectedCategory) 
                    .map((skill, index) => (
                        <SkillCard key={index} {...skill} /> 
                    ))}
            </div>
        </section>
    );
};

export default Skills;
