import React from 'react';
import Layout from '@theme/Layout';
import * as styles from './examples.module.css'

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div>
       <table class="styles.styled-table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Language</th>
            <th>Framework</th>
            <th>Link</th>
            <th>Tags</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Dom</td>
            <td>6000</td>
        </tr>
        <tr class="styles.active-row">
            <td>Melissa</td>
            <td>5150</td>
        </tr>
    </tbody>
</table>

      </div>
    </Layout>
  );
}