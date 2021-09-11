var canvas = document.getElementById("webgl-canvas");
var gl = canvas.getContext('webgl');

var vertexShaderCode = `
    void main(){
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
        gl_PointSize = 20.0;
    }
`;

var vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertexShaderCode);
gl.compileShader(vertexShader);

var fragmentShaderCode = `
    void main(){
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
`;

var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fragmentShaderCode);
gl.compileShader(fragmentShader);

var shaderProgram = gl.createProgram();
gl.attachShader(shaderProgram, vertexShader);
gl.attachShader(shaderProgram, fragmentShader);
gl.linkProgram(shaderProgram);
gl.useProgram(shaderProgram);

gl.clearColor(1.0, 1.0, 1.0, 1);
gl.clear(gl.COLOR_BUFFER_BIT);

gl.drawArrays(gl.POINTS, 0, 1);