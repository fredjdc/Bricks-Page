/**
 * Animated Hero Background
 * Creates a flowing gradient mesh animation similar to Google Antigravity
 */

class AnimatedBackground {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.width = 0;
        this.height = 0;
        
        // Animation parameters
        this.time = 0;
        this.speed = 0.0005;
        
        // Gradient mesh points
        this.meshPoints = [];
        this.gridSize = 4; // 4x4 grid of control points
        
        // Color palette - Bricks blue theme with yellow accents
        this.colors = [
            { r: 30, g: 64, b: 175, a: 0.6 },    // Bricks blue
            { r: 59, g: 130, b: 246, a: 0.5 },   // Lighter blue
            { r: 255, g: 204, b: 0, a: 0.3 },    // Bricks yellow
            { r: 147, g: 51, b: 234, a: 0.4 },   // Purple accent
            { r: 6, g: 182, b: 212, a: 0.4 }     // Cyan accent
        ];
        
        this.init();
    }
    
    init() {
        this.resize();
        this.createMeshPoints();
        this.animate();
        
        // Handle window resize
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        const dpr = window.devicePixelRatio || 1;
        const rect = this.canvas.getBoundingClientRect();
        
        this.width = rect.width;
        this.height = rect.height;
        
        this.canvas.width = this.width * dpr;
        this.canvas.height = this.height * dpr;
        
        this.ctx.scale(dpr, dpr);
        
        // Recreate mesh points on resize
        if (this.meshPoints.length > 0) {
            this.createMeshPoints();
        }
    }
    
    createMeshPoints() {
        this.meshPoints = [];
        const cols = this.gridSize;
        const rows = this.gridSize;
        
        for (let i = 0; i <= rows; i++) {
            for (let j = 0; j <= cols; j++) {
                this.meshPoints.push({
                    baseX: (j / cols) * this.width,
                    baseY: (i / rows) * this.height,
                    offsetX: Math.random() * 100 - 50,
                    offsetY: Math.random() * 100 - 50,
                    speedX: Math.random() * 0.5 + 0.3,
                    speedY: Math.random() * 0.5 + 0.3,
                    radiusX: Math.random() * 150 + 100,
                    radiusY: Math.random() * 150 + 100,
                    colorIndex: Math.floor(Math.random() * this.colors.length)
                });
            }
        }
    }
    
    updateMeshPoints() {
        this.meshPoints.forEach(point => {
            point.offsetX = Math.sin(this.time * point.speedX) * point.radiusX;
            point.offsetY = Math.cos(this.time * point.speedY) * point.radiusY;
        });
    }
    
    drawGradientMesh() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.width, this.height);
        
        // Create multiple radial gradients at each mesh point
        this.meshPoints.forEach(point => {
            const x = point.baseX + point.offsetX;
            const y = point.baseY + point.offsetY;
            const color = this.colors[point.colorIndex];
            
            // Create radial gradient
            const gradient = this.ctx.createRadialGradient(x, y, 0, x, y, 300);
            gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`);
            gradient.addColorStop(0.5, `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a * 0.5})`);
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            
            this.ctx.fillStyle = gradient;
            this.ctx.fillRect(0, 0, this.width, this.height);
        });
        
        // Add subtle noise/grain effect
        this.ctx.globalCompositeOperation = 'overlay';
        this.ctx.fillStyle = `rgba(255, 255, 255, ${0.02 * Math.sin(this.time * 2)})`;
        this.ctx.fillRect(0, 0, this.width, this.height);
        this.ctx.globalCompositeOperation = 'source-over';
    }
    
    animate() {
        this.time += this.speed;
        this.updateMeshPoints();
        this.drawGradientMesh();
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new AnimatedBackground('hero-canvas');
});
