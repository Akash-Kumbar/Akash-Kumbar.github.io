---
layout: page
title: Learning based refinement of 3D point clouds through hole filling
description: Model to detect and fill holes generated due to unnatural reasons
img: assets/img/hole_fill/complete.png
importance: 4
category: work
---
Tools used: Python, PyTorch, PyTorch3D, Open3D

Developed a deep learning model to identify and repair point cloud gaps caused by occlusion and reflections. Designed an algorithm to generate datasets with realistic holes in point clouds for training and testing purposes.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/hole_fill/complete.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Block diagram of the project.
</div>

Dataset generation.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/hole_fill/Hole_gen.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Block diagram for generation of the dataset.
</div>

Results
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/hole_fill/holeRes3.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Results.
</div>